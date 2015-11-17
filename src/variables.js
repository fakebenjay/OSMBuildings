
var TILE_SIZE = 256;

var DEFAULT_HEIGHT = 10;
var HEIGHT_SCALE = 1.0;

var MAX_USED_ZOOM_LEVEL = 25;
var DEFAULT_COLOR = 'rgb(220, 210, 200)';
var HIGHLIGHT_COLOR = '#f08000';
var FOG_COLOR = '#f0f8ff';
var BACKGROUND_COLOR = '#efe8e0';

var document = global.document;

var EARTH_RADIUS_IN_METERS = 6378137;
var EARTH_CIRCUMFERENCE_IN_METERS = EARTH_RADIUS_IN_METERS * Math.PI * 2;

var METERS_PER_DEGREE_LATITUDE = EARTH_CIRCUMFERENCE_IN_METERS / 360;

/* For shadow mapping, the camera rendering the scene as seen by the sun has
 * to cover everything that's also visible to the user. For this to work 
 * reliably, we have to make assumptions on how high (in [m]) the buildings 
 * can become.
 * Note: using a lower-than-accurate value will lead to buildings parts at the
 * edge of the viewport to have incorrect shadows. Using a higher-than-necessary
 * value will lead to an unnecessarily large view area and thus to poor shadow
 * resolution. */
var SHADOW_MAP_MAX_BUILDING_HEIGHT = 100;
