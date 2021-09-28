import { DateTime } from "luxon"

enum DataType {
    UNDEFINED = 'undefined',
    INTEGER = 'integer',
    FLOAT = 'float',
    BOOLEAN = 'boolean',
    STRING = 'string',
    DATE_TIME = 'datetime',
    OBJECT = 'object',
    ARRAY = 'array',
    FIELD_ARRAY = 'fieldarray',
    FORM_ARRAY = 'formarray',
    GROUP = 'group',
    FROM_GROUP = 'formgroup',
    FIELD_GROUP = 'fieldgroup',
    MAPPING = 'mapping',
    NO_DATA = 'no_data',
}

const isTypeof = (v: any): DataType => {
    if (v === undefined || v === null || (typeof v === 'object' && Array.isArray(v) && v.length === 0) || (typeof v === 'object' && Object.keys(v).length === 0)) {
        return DataType.NO_DATA
    } else if (typeof v === 'number' && (v % 1 !== 0)) {
        return DataType.FLOAT
    } else if (typeof v === 'number' && (v % 1 === 0)) {
        return DataType.INTEGER
    } else if (typeof v === 'boolean') {
        return DataType.BOOLEAN
    } else if (typeof v === 'object' && Array.isArray(v)) {
        return DataType.ARRAY
    } else if (typeof v === 'object') {
        return DataType.OBJECT
    } else if (typeof v === 'string') {
        if (/^\d{4}[\-]\d{2}[\-]\d{2}$/.test(v) &&
            (DateTime.fromISO(v).toFormat('yyyy-MM-dd') !== "Invalid DateTime")) {
            return DataType.DATE_TIME
        } else {
            return DataType.STRING
        }
    }
    return DataType.UNDEFINED
}

async function dev() {


        let tt1 = 'A'
    let tt2 = 'A'

          let qq1 = 'A'
    let qq2 = 'A'
    // console.log([tt1, tt2, qq1, qq2].every(v => v === 'A'))
    console.log([tt1, tt2, 'q'].every(v => [qq1, qq2].includes(v)))
}

(async () => {
    await dev()
})()