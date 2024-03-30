const express = require('express');
const router = express.Router()
const axios = require('axios')
const Setting = require('../models/Setting')

// router.get('/api/get-settings', async (req, res) => {
//     try {
//         const setting = await Setting.findOne()

//         return res.status(200).json({
//             success: true,
//             data: setting
//         })
//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             message: 'Lỗi hệ thống'
//         })
//     }
// })

// router.post('/api/update-settings', async (req, res) => {
//     try {
//         const { keyProxy, id } = req.body

//         if (!keyProxy || !id) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Vui lòng nhập đủ thông tin!'
//             })
//         }

//         const setting = await Setting.findById(id)

//         if (!setting) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Không tìm thấy setting'
//             })
//         }

//         setting.keyProxy = keyProxy

//         await setting.save()

//         return res.status(200).json({
//             success: true,
//             message: 'Cập nhật thành công'
//         })
//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             message: 'Lỗi hệ thống'
//         })
//     }
// })

router.post('/api/Common/IsMemberRegisterEnabled', async (req, res) => {
    return res.status(200).json({
        Data: true,
    });
});

router.get('/web', function (req, res) {
    res.render('web/Home/web');
});

router.get('/mobile', function (req, res) {
    res.render('mobile/Mobile/Home/Login');
});

router.get('/mobile/add', function (req, res) {
    res.render('mobileadd/Mobile/Aspx/add');
});

router.get('/web/add', function (req, res) {
    res.render('web2/Aspx/Add1');
});

router.get('/', function (req, res) {
    res.render('default');
});

router.get('*', function (req, res) {
    res.render('404');
});



// router.post('/cookie', homeController.cookie);
// router.get('/webhook', homeController.webhook);



module.exports = router