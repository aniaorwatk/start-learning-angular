export interface IRoomType {
    totalRooms: number,
    availableRooms: number,
    bookedRooms: number,
}

export interface IRoomListType{
    roomNumber:number,
    roomType: string,
    amentites: string,
    proce: number,
    photos: string[] | string,
    checkingTime: Date,
    checkoutTime: Date,

}