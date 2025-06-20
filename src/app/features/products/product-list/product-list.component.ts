import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  imageUrl: string;
  stock: number;
  minStock: number;
}

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductListComponent {
  products: Product[] = [];
  pagedProducts: Product[] = [];
  currentPage = 0;
  pageSize = 20;

  totalPagesArray: number[] = [];

  searchTerm = '';

  ngOnInit() {
    for (let i = 1; i <= 50; i++) {
      this.products.push({
        name: `Producto ${i}`,
        imageUrl: 'https://via.placeholder.com/100',
        stock: Math.floor(Math.random() * 100),
        minStock: 10
      });
    }
    this.updatePagination();
  }

  updatePagination() {
    const filtered = this.products.filter(p => p.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;

    this.pagedProducts = filtered.slice(start, end);
    const totalPages = Math.ceil(filtered.length / this.pageSize);
    this.totalPagesArray = Array(totalPages).fill(0).map((_, i) => i);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  onSearchChange() {
    this.currentPage = 0;
    this.updatePagination();
  }
}