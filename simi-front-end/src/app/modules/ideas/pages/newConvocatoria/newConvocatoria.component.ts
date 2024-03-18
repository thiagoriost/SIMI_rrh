import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-new-convocatoria',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './newConvocatoria.component.html',
    styleUrl: './newConvocatoria.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewConvocatoriaComponent { }
