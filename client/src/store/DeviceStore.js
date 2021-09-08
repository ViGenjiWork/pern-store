import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor(props) {
        this._types = [
            {id: 1, name: 'Смартфоны'},
            {id: 2, name: 'Холодильники'},
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
        ]
        this._devices = [
            {
                id: 1,
                name: 'iphone 12 pro',
                price: 25000,
                img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'
            },
            {
                id: 2,
                name: 'iphone 12 pro',
                price: 25000,
                img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'
            },
            {
                id: 3,
                name: 'iphone 12 pro',
                price: 25000,
                img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'
            },
            {
                id: 4,
                name: 'iphone 12 pro',
                price: 25000,
                img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'
            }
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

}