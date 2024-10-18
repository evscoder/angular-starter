const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../models/User');
const config = require('./../config/config');

module.exports.login = async function(req, res) {
  try {
    const authUser = await User.findOne({ phone: req.body.phone });

    if (!authUser) {
      return res.status(404).json({ message: 'Пользователь не найден.' });
    }

    if (req.body.smsCode !== authUser.smsCode) {
      return res.status(401).json({ message: 'Неверный SMS-код.' });
    }

    const token = jwt.sign({
      phone: authUser.phone,
      userId: authUser._id
    }, config.jwt, {expiresIn: 60 * 60})

    res.status(200).json({
      token: `Bearer ${token}`
    });
  } catch (err) {
    console.error('Ошибка входа:', err);
    res.status(500).json({ message: 'Ошибка при входе', error: err.message });
  }
};

module.exports.register = async function (req, res) {
  try {
    const authUser = await User.findOne({ phone: req.body.phone });

    if (authUser) {
      return res.status(409).json({ message: 'Такой номер уже занят.' });
    }

    const userCreate = new User({
      phone: req.body.phone,
    });

    await userCreate.save();

    res.status(201).json({
      phone: userCreate.phone,
      id: userCreate._id
    });
  } catch (err) {
    console.error('Ошибка создания пользователя:', err);
    res.status(500).json({ message: 'Ошибка при создании пользователя', error: err.message });
  }
};
