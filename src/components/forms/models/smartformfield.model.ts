import { TooltipPosition } from '@angular/material/tooltip';

export class SmartFormFieldModel {
  hideTooltip: boolean = false;
  placeholder: string = "";
  tooltip: string = "";
  tooltipPosition: TooltipPosition = "above";
}
