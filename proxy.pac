function FindProxyForURL(url, host) {

    var p1 = "PROXY 192.168.52.132:8080";
    var p2 = "PROXY 192.168.52.132:8080";
    var failover = p1 + "; " + p2 + "; DIRECT";

    host = host.toLowerCase();

    if (host === "ei-sol.zac.ai" || host.endsWith(".e-staffing.ne.jp")")
        return failover;

    return "DIRECT";
}
