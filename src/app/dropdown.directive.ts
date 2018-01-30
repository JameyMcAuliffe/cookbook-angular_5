import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

	//binds open class to button div in recipe-detail
	@HostBinding('class.open') isOpen = false;

	//listens for click event from recipe-detail button
	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
	}

  constructor() { }

}
