import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
    @Get("/hay")
    getHayRoute() {
        return "hello party"
    }

    @Get("/bye")
    getByeRoute() {
        return "bye party"
    }
}
