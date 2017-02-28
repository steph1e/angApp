import { Directive, ElementRef,EventEmitter, HostListener, Input, Output } from '@angular/core';
@Directive({
selector: '[ywActionable]'
})
export class ActionableDirective {
    @Input('ywActionable') backgroundColor: string;
    @Output() onAction = new EventEmitter();

constructor(private element: ElementRef) {
}
@HostListener('mouseenter') onMouseEnter() {
this.setAppearance('#aaaaaa', 'pointer');
}
@HostListener('mouseleave') onMouseLeave() {
this.setAppearance(null, null);
}
@HostListener('click') onClick (){
    this.onAction.emit(null)
;}
setAppearance(color: string, cursor: string) {
let style = this.element.nativeElement.style;
style.backgroundColor = color;
style.cursor = cursor;
}
}