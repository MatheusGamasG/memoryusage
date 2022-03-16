const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = 100 - (fRam / tRam) * 100;

    const stats = {
        os: platform(),
        arch: arch(),
        totalRam: `${parseInt(tRam)}MB`,
        freeRam: `${parseInt(fRam)}MB`,
        ramUsage: `${usage.toFixed(2)}%`
    }
    console.clear();
    console.table(stats);
    
    exports.stats = stats;
}, 1000);
