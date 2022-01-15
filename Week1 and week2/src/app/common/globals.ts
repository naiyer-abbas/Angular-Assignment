export class GlobalConstants {
    public static is_logged: boolean = false;
    public static toggle = () => this.is_logged = !this.is_logged;
}