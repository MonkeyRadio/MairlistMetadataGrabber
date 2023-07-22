
type MairlistConnection = {
    host: string;
    port: number;
    user: string;
    password: string;
}

export default class MairlistAPI {
    constructor (private readonly connection: MairlistConnection) {}

    public getPlaylist (index: number) {
        
    }

}