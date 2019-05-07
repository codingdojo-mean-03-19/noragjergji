import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromPlayers from './players';

const routes: Routes = [
    {
        path: '',
        component: fromPlayers.PlayerListComponent
    },
    {
        path: 'players/create',
        component: fromPlayers.PlayerCreateComponent
    },
    {
        path: 'players/list',
        component: fromPlayers.PlayerListComponent
    },
    {
        path: 'players/status',
        component: fromPlayers.PlayerStatusComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
    export class AppRoutingModule {}