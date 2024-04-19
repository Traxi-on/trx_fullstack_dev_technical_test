import CoordinateInterface from "../../interfaces/coordinateInterface";

const exampleRouteData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [-99.14435051803017, 19.407284909983332],
          [-99.14486152573838, 19.404773560390822],
          [-99.14510358202111, 19.402389010749502],
          [-99.14279059976406, 19.4025158493765],
          [-99.14317338044842, 19.400871582047372],
          [-99.14048113787076, 19.400508814414906],
          [-99.13949825566002, 19.407522178609625],
          [-99.1377461612839, 19.407723707593647],
          [-99.13672054506394, 19.41469645662545],
          [-99.1376179592566, 19.414817368711297],
          [-99.14355798653095, 19.418404386333904],
          [-99.14334431648525, 19.421507697260708]
        ],
        "type": "LineString"
      }
    }
  ]
};

export class RouteCoordinatesService {
  async getRouteCoordinates(): Promise<CoordinateInterface[]> {
    try {
      const exampleRoute = exampleRouteData;

      const coordinates: CoordinateInterface[] = exampleRoute.features[0].geometry.coordinates.map((coordinate: number[]) => ({
        lat: coordinate[1],
        lng: coordinate[0]
      }));

      return coordinates;
    } catch (error) {
      console.error('Error al obtener las coordenadas de la ruta:', error);
      return [];
    }
  }
}

export default new RouteCoordinatesService();
