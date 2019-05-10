import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromProducts from './products';

const routes: Routes = [{
    path: '',
        component: fromProducts.ListComponent
},
{
    path: 'products/new',
    component: fromProducts.NewComponent
},
// {
//     path: 'products/list',
//     component: fromProducts.ListComponent
// },
{
    path: 'products/:product_id',
    component: fromProducts.DetailsComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
    export class AppRoutingModule {}