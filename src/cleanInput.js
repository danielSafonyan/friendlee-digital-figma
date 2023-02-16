export default function cleanInput(text) {
    if (typeof text === 'number') text = text.toString()
    // return text.length > 0 ? parseInt(text.replace(/[^0-9]/g, '')) : 1000
    return parseInt(text.replace(/[^0-9]/g, ''))
}