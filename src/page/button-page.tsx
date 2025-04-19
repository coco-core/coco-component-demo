import { page, route } from 'coco-mvc';
import Button from '../view/button';

@route("/button")
@page()
class ButtonPage {

  render() {
    return <div>
      <Button type={'default'}>default</Button>
      <Button type={'primary'}>primary</Button>
      <Button type={'link'}>link</Button>
      <Button type={'primary-link'}>primary link</Button>
      <Button type={'primary-link'} loading>primary link</Button>
    </div>
  }
}

export default ButtonPage;