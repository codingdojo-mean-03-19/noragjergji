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
        path: 'players/game1',
        component: fromPlayers.Game1Component
    },
    {
        path: 'players/game2',
        component: fromPlayers.Game2Component
    },
    {
        path: 'players/game3',
        component: fromPlayers.Game3Component
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
    export class AppRoutingModule {}