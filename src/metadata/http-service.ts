import { Metadata, Target, target } from 'coco-mvc';

@target([Target.Type.Method])
class HttpService extends Metadata {}

export default HttpService;
