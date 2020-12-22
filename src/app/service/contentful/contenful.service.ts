import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContenfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });


  constructor(
    private Http: HttpClient
  ) { }

  async getProducts(query?: object): Promise<Entry<any>[]> {
    const res = await this.client.getEntries(Object.assign({
      content_type: 'product'
    }, query));
    return res.items;
  }

  async getPortfolio() {
    return this.Http.get('http://localhost:3000/portfolios').toPromise();
  }
}
