const SystemDiagram = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-7 text-center">
            <p className="section-label">System Overview</p>
            <h2 className="section-heading display-5">How It All Connects</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="diagram-card p-4 p-md-5">
              <div className="diagram-flow">
                {/* Row 1: Entry Points */}
                <div className="diagram-row">
                  <div className="diagram-node node-entry">
                    <i className="bi bi-person" />
                    <span>Guest</span>
                  </div>
                  <div className="diagram-node node-entry">
                    <i className="bi bi-people" />
                    <span>Staff</span>
                  </div>
                  <div className="diagram-node node-entry">
                    <i className="bi bi-gear" />
                    <span>Admin</span>
                  </div>
                </div>

                <div className="diagram-connector">
                  <i className="bi bi-arrow-down" />
                </div>

                {/* Row 2: Frontend */}
                <div className="diagram-row">
                  <div className="diagram-node node-layer">
                    <i className="bi bi-window" />
                    <span>React Frontend</span>
                    <small>Role-aware routing &middot; Real-time UI</small>
                  </div>
                </div>

                <div className="diagram-connector">
                  <i className="bi bi-arrow-down-up" />
                </div>

                {/* Row 3: API Layer */}
                <div className="diagram-row">
                  <div className="diagram-node node-core">
                    <i className="bi bi-hdd-rack" />
                    <span>Django REST API</span>
                    <small>RBAC &middot; Hotel scoping &middot; Business logic</small>
                  </div>
                </div>

                <div className="diagram-connector triple">
                  <i className="bi bi-arrow-down" />
                  <i className="bi bi-arrow-down" />
                  <i className="bi bi-arrow-down" />
                </div>

                {/* Row 4: Services */}
                <div className="diagram-row">
                  <div className="diagram-node node-service">
                    <i className="bi bi-database" />
                    <span>PostgreSQL</span>
                    <small>Multi-tenant data</small>
                  </div>
                  <div className="diagram-node node-service">
                    <i className="bi bi-broadcast" />
                    <span>Pusher</span>
                    <small>Event-driven sync</small>
                  </div>
                  <div className="diagram-node node-service">
                    <i className="bi bi-key" />
                    <span>Token Auth</span>
                    <small>Guest &amp; staff identity</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDiagram;
