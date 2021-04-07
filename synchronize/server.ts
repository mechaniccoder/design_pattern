export interface DataStore {
  timestamp: number;
  data: string;
}

interface DataSyncingInfo {
  timestamp: number;
  data: string;
}

export class Server {
  store: DataStore = {
    timestamp: 0,
    data: "",
  };

  synchronize(clientDataStore: DataStore): DataSyncingInfo {
    if (clientDataStore.timestamp > this.store.timestamp) {
      this.store = clientDataStore;
      return;
    } else if (clientDataStore.timestamp < this.store.timestamp) {
      return {
        timestamp: this.store.timestamp,
        data: this.store.data,
      };
    } else {
      return;
    }
  }
}
