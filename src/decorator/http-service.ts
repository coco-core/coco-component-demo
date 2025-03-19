import { genDecorator } from 'coco-mvc';
import HttpService from '../metadata/http-service';

export default genDecorator<
  string,
  ClassMethodDecoratorContext
>(HttpService, {
  optional: true,
});
