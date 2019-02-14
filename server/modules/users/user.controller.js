const User = require('./user.model')
const Sendgrid = require('../../scripts/Sendgrid')
const randomstring = require("randomstring");
const crypto = require('crypto');

exports.signUp = async function signUp(req, res) {
    try {
        console.log(req.body)
        const user = await User.create(req.body);
        console.log(user)
        Sendgrid.verificationEmail(user.email, req.body.password, user.firstName, user.emailCode)
        return res.status(201).json({ "success": true, firstName: user.firstName });
    } catch (e) {
        return res.status(500).json(e);
    }
}

exports.update = async function login(req, res) {
    if (req.session.email) {
        try {
            User.updateOne({
                "email": req.session.email
            }, {
                    "firstName": req.body.firstName,
                    "lastName": req.body.lastName
                }
            ).then(user => {
                return res.status(200).json(user);
            }).catch(error => {
                console.error("Enable Verification Code User", error)
            })
        } catch (e) {
            return res.status(500).json(e);
        }
    } else {

    }
}

exports.changePass = function (req, res, next) {
    //console.log("body",req.body)
    if (req.session.email) {
        User.findOne({ email: req.session.email }).then(usr => { //{},{password}
            //console.log("usr",usr)
            if (usr) {
                usr.active = false
                usr.password = req.body.password
                //usr.verificationCode = randomstring.generate(32);
                usr.save(err => {
                    if (err) {
                        res.status(400).send(err)
                    } else {

                        //Sendgrid.changeEmail(usr.email, usr.firstName)
                        console.log("updated")
                        res.send({ success: true })
                    }
                })
            } else {
                res.json({ error: "missing user" })
            }
        }).catch(error => {
            res.json(error)
        })
    } else {
        res.json({ error: "missing parameters" })
    }
}

/* exports.changePassCode = function (req, res, next) {
    console.log('body', req.body)
    if (req.body.code) {
        //let saltTemp = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64')
        User.updateOne(
            {
                verificationCode: req.body.code
            },
            {
                active: false,
                password: req.body.password,
                verificationCode: randomstring.generate(32)
            }).then(usr => {
                if (usr) {
                    res.send({ success: true })
                } else {
                    res.json({ error: "missing user" })
                }
            }).catch(error => {
                res.json(error)
            })



    } else {
        res.json({ error: "missing parameters" })
    }
} */

exports.changePassCode = function (req, res, next) {
    //console.log(req.body)
    if (req.body.code) {
        User.findOne({ verificationCode: req.body.code }).then(usr => { //{},{password}
            //console.log(usr)
            if (usr) {
                usr.active = false
                usr.password = req.body.password
                usr.verificationCode = randomstring.generate(32);
                usr.save(err => {
                    if (err) {
                        res.status(400).send(err)
                    } else {
                        if (usr) {
                            //Sendgrid.changeEmail(usr.email, usr.firstName)
                        }
                        res.send({ success: true })
                    }
                })
            } else {
                res.json({ error: "missing user" })
            }
        }).catch(error => {
            res.json(error)
        })
    } else {
        res.json({ error: "missing parameters" })
    }
}


exports.resetPassEmail = function (req, res, next) {
    // console.log(req.body.email)
    if (req.body.email) {
        User.findOne({ email: req.body.email }).then(usr => { //{},{password}
            if (usr) {
                Sendgrid.recoverEmail(usr.email, usr.verificationCode, usr.firstName)
                res.json({ success: true })
            } else {
                res.json({ success: false })
            }
        }).catch(error => {
            res.json(error)
        })
    } else {
        res.send("missing parameters")
    }
}

exports.login = async function login(req, res) {
    try {

        let user = await User.findOne({ "email": req.body.email });

        if (user) {
            if (user && user.emailConfirmation) {
                if (user && user.authenticate(req.body.password)) {

                    delete user.password;
                    delete user.salt;
                    req.session.userId = user._id;
                    req.session.name = user.name;
                    req.session.email = user.email;

                    res.status(200).json(user);
                }
                else {
                    return res.status(401).send({
                        message: 'Invalid credentials'
                    });
                }
            } else {
                return res.status(401).send({
                    message: 'Confirmation email needed'
                });
            }
        } else {
            return res.status(401).send({
                message: 'Invalid credentials'
            });
        }
    } catch (e) {
        return res.status(500).json(e);
    }
}

exports.logout = function (req, res, next) {
    //console.log("logout", req.session)
    //if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
        if (err) {
            return res.status(401).json(err);
        } else {
            return res.status(200).json({ success: true });
        }
    });
    /* } else {
        return res.status(200).json({ success: true });
    } */
};

exports.status = function (req, res, next) {
    User.findById(req.session.userId, { "password": 0, "salt": 0 }).then(user => {
        //console.log(user)
        if (user) {
            delete user.password;
            delete user.salt;
            res.status(200).json(user);
        } else {
            res.status(200).send("ok");
        }
    }).catch(error => {
        res.status(400).json(error)
    })

};

exports.checkCode = function (req, res) {
    if (req.body.code) {
        User.findOne({ emailCode: req.body.code }).then(user => {
            if (user) {
                user.emailConfirmation = true
                user.save(err => {
                    if (err) {
                        res.status(400).send(err)
                    }
                    //res.send({ success: true })
                    //console.log(req.session.userId)
                    //if (!req.session.userId) {
                    delete user.password;
                    delete user.salt;
                    req.session.userId = user._id;
                    req.session.name = user.name;
                    req.session.email = user.email;

                    res.status(200).json(user);
                    //}
                })
            } else {
                return res.status(500).json({ error: "user not found" });
            }

        }).catch(error => {
            console.log(error)
        })
    } else {
        res.status(400).send("missing parameters");
    }
};

exports.toAceptEmailVerification = function (req, res) {
    if (req.body.email) {
        User.updateOne({ email: req.body.email }, { emailConfirmation: true }).then(user => {
            res.send({ success: true })
        }).catch(error => {
            return res.status(500).json({ error: "user not found" });
        })
    } else {
        res.status(400).send("missing parameters");
    }
};

exports.toAdmin = function (req, res) {
    if (req.body.email) {
        User.updateOne({ email: req.body.email }, { userType: ['manager'] }).then(user => {
            res.send({ success: true })
        }).catch(error => {
            return res.status(500).json({ error: "user not found" });
        })
    } else {
        res.status(400).send("missing parameters");
    }
};

exports.users = async function (req, res, next) {
    if (req.session.userId) {
        let users = await User.find({}, { password: 0, salt: 0 })
        return res.json(users)
    }
};
exports.createOrder = async function (req, res, next) {
    if (req.session.userId) {
        let user = await User.findOneAndUpdate({ "_id": req.session.userId }, { order: req.body })
        return res.json(user)
    }
};

exports.completedOrder = async function (req, res, next) {
    if (req.session.userId) {
        let us = await User.findOne({ "email": req.body.email })
        let user = await User.findOneAndUpdate({ "email": req.body.email }, { order: null, points: req.body.order.possiblePoints + us.points, rankPoint: req.body.order.possiblePoints + us.points })
        return res.json(user)

    }
};