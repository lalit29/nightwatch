require('dotenv').config();
//test git

module.exports = {
    'src_folders': ['tests'],
    'page_objects_path': ['page-objects'],

    'webdriver': {
        'start_process': true,
        // 'server_path': require('chromedriver').path,
        // 'server_path': 'C:\\Users\\ASUS\\Desktop\\javascript\\POC\\drivers\\chromedriver.exe',
        'server_path': 'drivers\\chromedriver.exe',
        'port': 9515
    },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    'args': ['--headless','--window-size=1860,1200','--no-sandbox']
                }
            }
        }
    }
};
