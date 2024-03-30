const Setting = require('../models/Setting')

const seedDataSetting = async () => {
  try {
    const countData = await Setting.countDocuments()
    if (countData > 0) {
      return
    }

    const setting = new Setting({
      keyProxy: 'TLV4Jp6mZrXo7IeHEGFj47bDRVvQHhyQEsbMm7'
    })

    await setting.save()

    console.log('Database setting seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDataSetting()