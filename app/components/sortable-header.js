import Component from '@glimmer/component';

export default class SortableHeaderComponent extends Component {
  get isSelected(){
    return this.args.sortBy === this.args.sortedBy;
  }
}
