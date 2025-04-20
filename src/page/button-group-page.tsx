import { page, route } from 'coco-mvc';
import ButtonGroup from "../view/button-group";

@route("/button-group")
@page()
class ButtonPage {

  btnArray = ['水果', '蔬菜', '荤菜'];

  render() {
    return <div>
      <ButtonGroup btns={this.btnArray}></ButtonGroup>
    </div>
  }
}

export default ButtonPage;