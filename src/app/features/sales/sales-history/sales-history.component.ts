import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sales-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './sales-history.component.html',
  styleUrl: './sales-history.component.scss'
})
export class SalesHistoryComponent {
  dialog = inject(MatDialog);

  orders = [
    {
      id: 'ORD-001',
      date: '2025-06-01',
      buyer: 'Empresa A',
      seller: 'Mi Empresa',
      isSale: true,
      details: 'Venta de 5 productos electrónicos por €2,000'
    },
    {
      id: 'ORD-002',
      date: '2025-06-10',
      buyer: 'Mi Empresa',
      seller: 'Proveedor B',
      isSale: false,
      details: 'Compra de 3 paquetes de suministros por €800'
    }
  ];

  openDetails(order: any) {
    this.dialog.open(OrderDetailsDialog, {
      data: order
    });
  }
}

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'order-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Detalles del Pedido</h2>
    <mat-dialog-content>
      <p><strong>ID:</strong> {{ data.id }}</p>
      <p><strong>Fecha:</strong> {{ data.date }}</p>
      <p><strong>Comprador:</strong> {{ data.buyer }}</p>
      <p><strong>Vendedor:</strong> {{ data.seller }}</p>
      <p><strong>Descripción:</strong> {{ data.details }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `
})
export class OrderDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
