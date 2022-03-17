/** @param {NS} ns **/
export async function main(ns) {
	var server = ns.getHostname();
	ns.tprint(server);
  while(true){
    ns.hack(server);
    ns.weaken(server);
    ns.grow(server);
    ns.weaken(server);
  }
}
