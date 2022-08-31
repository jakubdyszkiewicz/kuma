package hooks

type Hooks struct {
	resourceSetHooks  []ResourceSetHook
	modificationHooks []ModificationsHook
}

func (h *Hooks) AddResourceSetHook(hook ResourceSetHook) {
	h.resourceSetHooks = append(h.resourceSetHooks, hook)
}

func (h *Hooks) ResourceSetHooks() []ResourceSetHook {
	return h.resourceSetHooks
}

func (h *Hooks) AddModificationHook(hook ModificationsHook) {
	h.modificationHooks = append(h.modificationHooks, hook)
}

func (h *Hooks) ModificationHooks() []ModificationsHook {
	return h.modificationHooks
}
