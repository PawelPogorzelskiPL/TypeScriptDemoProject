/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company()

const customMap = new CustomMap(4, user.location.lat, user.location.lng, "map");
customMap.addMarker(user);
customMap.addMarker(company);



