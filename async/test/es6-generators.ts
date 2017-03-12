function* funcCollection<T>(): IterableIterator<T> { }

function funcMapIterator<T, E>(value: T, callback: AsyncResultCallback<T, E>) { }
function funcMapComplete<T, E>(error: E, results: T[]) { }

function funcCbErrBoolean<T>(v: T, cb: (err: Error, res: boolean) => void) { }

function eachIterator<T, E>(item: T, callback: (err: Error) => void) { }
function eachOfIterator<T, K, E>(item: T, key: K, callback: (err: Error) => void) { }

function concatIterator<T, R, E>(item: T, callback: (err: E, res: R[]) => void) { }

async.map(funcCollection(), funcMapIterator, funcMapComplete)
async.mapSeries(funcCollection(), funcMapIterator, funcMapComplete)
async.mapLimit(funcCollection(), 2, funcMapIterator, funcMapComplete)

async.filter(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.filterSeries(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.filterLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, results: any[]) { })
async.select(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.selectSeries(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.selectLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, results: any[]) { })

async.reject(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.rejectSeries(funcCollection(), funcCbErrBoolean, function (err: Error, results: any[]) { })
async.rejectLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, results: any[]) { })

async.each(funcCollection(), eachIterator, function (err: Error) { })
async.eachLimit(funcCollection(), 2, eachIterator, function (err: Error) { })
async.eachSeries(funcCollection(), eachIterator, function (err: Error) { })
async.eachOf(funcCollection(), eachOfIterator, function (err: Error) { })
async.eachOfLimit(funcCollection(), 2, eachOfIterator, function (err: Error) { })
async.eachOfSeries(funcCollection(), eachOfIterator, function (err: Error) { })
async.forEach(funcCollection(), eachIterator, function (err: Error) { })
async.forEachLimit(funcCollection(), 2, eachIterator, function (err: Error) { })
async.forEachSeries(funcCollection(), eachIterator, function (err: Error) { })
async.forEachOf(funcCollection(), eachOfIterator, function (err: Error) { })
async.forEachOfLimit(funcCollection(), 2, eachOfIterator, function (err: Error) { })
async.forEachOfSeries(funcCollection(), eachOfIterator, function (err: Error) { })

async.every(funcCollection(), funcCbErrBoolean, function (err: Error, res: boolean) { })
async.everyLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, res: boolean) { })
async.everySeries(funcCollection(), funcCbErrBoolean, function (err: Error, res: boolean) { })

async.some(funcCollection(), funcCbErrBoolean, function (err: Error, res: boolean) { })
async.someLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, res: boolean) { })
async.someSeries(funcCollection(), funcCbErrBoolean, function (err: Error, res: boolean) { })

async.detect(funcCollection(), funcCbErrBoolean, function (err: Error, res: boolean) { })
async.detectLimit(funcCollection(), 2, funcCbErrBoolean, function (err: Error, res: boolean) { })
async.detectSeries(funcCollection(), funcCbErrBoolean, function (err: Error, res: boolean) { })

async.concat(funcCollection(), concatIterator, (err: Error, res) => { })
async.concatSeries(funcCollection(), concatIterator, (err: Error, res) => { })
