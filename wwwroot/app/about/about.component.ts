import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <div class="card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">About</h2>
            </div>
            <div class="mdl-card__supporting-text">
                 <button md-raised-button>Click Material Button</button>
            </div>
        </div>
    `
})
export class AboutComponent { }
