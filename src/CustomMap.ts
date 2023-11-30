// Instructions to every other class
// on how they can be an argument to "addMarker"
export interface Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string
};



export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(zoom: number, lat: number, lng: number, divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: zoom,
            center: {
                lat: lat,
                lng: lng
            }
        });
    }
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            },
            label: mappable.name,
            
        });
        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        })
    }

}