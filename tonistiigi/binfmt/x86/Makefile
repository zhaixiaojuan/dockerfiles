# This file is generated by the template.

REGISTRY        ?=cr.loongnix.cn
ORGANIZATION    ?=tonistiigi
REPOSITORY      ?=binfmt
TAG             ?=x86_add_loongarch
LATEST          ?=true

IMAGE=$(REGISTRY)/$(ORGANIZATION)/$(REPOSITORY):$(TAG)
LATEST_IMAGE=$(REGISTRY)/$(ORGANIZATION)/$(REPOSITORY):latest
GIT_URL=https://github.com/Loongson-Cloud-Community/binfmt.git
default: image

src:
	git clone -b x86-abi1.0 $(GIT_URL) $@

image: src
	cd src && docker buildx build --load -t cr.loongnix.cn/tonistiigi/binfmt:x86_add_loongarch -f Dockerfile .

push:
	docker push $(IMAGE)
clean:
	rm -rf src                       
