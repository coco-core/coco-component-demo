import { page, route } from 'coco-mvc';
import Button from '../view/button';

@route("/button")
@page()
class ButtonPage {

  render() {
    return <div>
      <Button onClick={() => {}} type={'default'}>btn</Button>
    </div>
  }
}

export default ButtonPage;