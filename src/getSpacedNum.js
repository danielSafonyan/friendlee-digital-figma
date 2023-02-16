export default function getSpacedNum(numStr) {
    return numStr.toLocaleString().replaceAll(',', ' ');
}