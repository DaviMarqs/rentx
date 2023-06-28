import { container } from "tsyringe";
import { DayjsDateProvider } from "./DayjsDateProvider/DayjsDateProvider";
import { IDateProvider } from "./IDateProvider";

container.registerSingleton<IDateProvider>("DayjsDateProvider", DayjsDateProvider);
