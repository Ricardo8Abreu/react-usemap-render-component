import { KeyConfig, DataObject } from "../types/types"

type HandleKeyObject = <data extends object>({ item, key, index }: { item: data, key: KeyConfig<object> | "default", index: number }) => string | number

const handleKeyObject: HandleKeyObject = ({ item, key, index }) => {
    if (!item) return index

    if (typeof item !== "object") return index

    if (key === "index") {
        return index
    }

    if (key !== "default" && key in item) {
        return `${item[key]}`
    }
    // if is an object and have field id
    if (key === "default" && "id" in item) {
        type TypeItem = DataObject

        const newItem = item as TypeItem

        return `${newItem["id"]}`
    }

    return index
}

export default handleKeyObject