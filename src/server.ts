import { serverHttp } from "./app";

serverHttp.listen(4000, () =>
    console.log(`(Finge que tem um emoji de foguete aqui) Server is running on PORT 4000`)
);
