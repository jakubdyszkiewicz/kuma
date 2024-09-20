package api_server

import (
	"context"
	"os"

	"github.com/emicklei/go-restful/v3"

	"github.com/kumahq/kuma/api/openapi/types"
	"github.com/kumahq/kuma/pkg/api-server/authn"
	"github.com/kumahq/kuma/pkg/dns/vips"
	kuma_version "github.com/kumahq/kuma/pkg/version"
)

func addIndexWsEndpoints(ws *restful.WebService, getInstanceId func() string, getClusterId func() string, guiURL string, persistence *vips.Persistence) error {
	hostname, err := os.Hostname()
	if err != nil {
		return err
	}

	var instanceId string
	var clusterId string
	ws.Route(ws.GET("/").
		Metadata(authn.MetadataAuthKey, authn.MetadataAuthSkip).
		To(func(req *restful.Request, resp *restful.Response) {
			outbound, err := persistence.GetByMesh(context.Background(), "trafficroute") // trafficroute
			if err != nil {
				log.Error(err, "error while getting vips")
			}
			for _, he := range outbound.HostnameEntries() {
				log.Info("VIPS", "he", he.String(), "vo", outbound.Get(he))
			}

			if instanceId == "" {
				instanceId = getInstanceId()
			}

			if clusterId == "" {
				clusterId = getClusterId()
			}

			response := types.IndexResponse{
				Hostname:   hostname,
				Product:    kuma_version.Product,
				Version:    kuma_version.Build.Version,
				InstanceId: instanceId,
				ClusterId:  clusterId,
				Gui:        guiURL,
			}
			if kuma_version.Build.BasedOnKuma != "" {
				response.BasedOnKuma = &kuma_version.Build.BasedOnKuma
			}

			if err := resp.WriteAsJson(response); err != nil {
				log.Error(err, "Could not write the index response")
			}
		}))
	return nil
}
