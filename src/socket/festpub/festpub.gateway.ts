import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: 'socket/festpub',
  cors: { origin: '*' },
})
export class FestPubGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  connectedClients: { [socketId: string]: boolean } = {};
  clientList: {client: Socket, table: string}[] = [];
  adminList: Socket[] = [];
  
  handleConnection(client: Socket): void {
    client.emit('join');
  }
  
  handleDisconnect(client: Socket): void {
  }
  
  @SubscribeMessage('call')
  handleCall(client: Socket, table: number): void {
    console.log(table);
    for(let i=0; i<this.adminList.length; i++) {
      this.adminList[i].emit('call', table);
    }
  }
  
  @SubscribeMessage('userAdd')
  handleAddUser(client: Socket, data: any): void {
    console.log(data);
    if(data.type == 'client') {
      this.clientList.push({client: client, table: data.table});
    } else if (data.type == 'admin') {
      this.adminList.push(client);
    }
  }
  
  @SubscribeMessage('newOrder')
  handleNewOrder(client: Socket, table: string): void {
    for(let i=0; i<this.adminList.length; i++) {
      this.adminList[i].emit('orderList');
    }
    for(let i=0; i<this.clientList.length; i++) {
      if(this.clientList[i].table == table) {
        console.log(table);
        this.clientList[i].client.emit('orderList');
      }
    }
  }

  @SubscribeMessage('updateOrderState')
  handleUpdateOrderState(client: Socket, table: string): void {
    console.log('updateOrderState')
    for(let i=0; i<this.clientList.length; i++) {
      if(this.clientList[i].table == table) {
        console.log(table);
        this.clientList[i].client.emit('orderList');
      }
    }
  }
}