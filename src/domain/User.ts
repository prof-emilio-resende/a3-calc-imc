export default class User {
    public username: string = "";
    public accessToken: string = "";

    /**
     * Create a new instance of the user to add in context
     */
    constructor(username: string, accessToken: string) {
        this.username = username;
        this.accessToken = accessToken;        
    }
}
