const puppeteer = require('puppeteer')



function sleep(time) {
    return new Promise(function(resolve){
        setTimeout(resolve, time)
    })
}


async function SendLogin(page, username, password) {
    var username = ""
    var password = ""
    await page.type('#login-username', username)
    await page.type('#login-password', password)
    await page.click('#login-button')
    console.log('Successfully logged in')
    // Add more shit if you want but here is super simple and basic layout
  }

function main(username, password){
    puppeteer.launch({ headless: false }).then(async browser => {
        console.log('Starting Login')
        const page = await browser.newPage()
        await sleep(1000)
        await page.goto('https://accounts.spotify.com/login/')
        await page.waitForSelector('#login-username', { visible: true })
        await SendLogin(page, username, password)
    })
}

main()
