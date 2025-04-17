import { view } from 'coco-mvc';

@view()
class Button {
  props: {
    children: string;
    onClick: () => void;
    type: 'primary' | 'default'
  }

  color = () => {
    return this.props.type === "primary" ? "text-white bg-primary" : "text-primary border-primary border";
  }

  render() {
    return <div
      className={`inline-flex justify-center items-center h-10 px-8 rounded-md cursor-pointer ${this.color()}`}
      onClick={this.props.onClick}
    >
      {this.props.children}
    </div>
  }
}

export default Button;