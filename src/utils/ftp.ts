import net, { Socket } from 'net';

function clientTesting() {
  var client = new Socket();
  client.connect(21, '127.0.0.1', () => {
    console.log();
  });

}