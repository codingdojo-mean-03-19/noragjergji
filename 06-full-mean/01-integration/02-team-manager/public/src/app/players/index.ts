import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { Game1Component } from './game1/game1.component'
import { Game3Component } from './game3/game3.component'
import { Game2Component } from './game2/game2.component'

export const components: any[] = [ PlayerListComponent, PlayerCreateComponent, Game1Component, Game2Component, Game3Component];

export * from './player-list/player-list.component';
export * from './player-create/player-create.component';
export * from './game1/game1.component';
export * from './game2/game2.component'
export * from './game3/game3.component'